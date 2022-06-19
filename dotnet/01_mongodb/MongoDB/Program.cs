using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace MongoDB
{
    internal class Program
    {
        async static Task Main()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("test");

            await Example04(database);
        }

        class User
        {
            public ObjectId Id { get; set; }
            public string Name { get; set; }
            public ObjectId[] Hobbies { get; set; }
            public Hobby[] HobbyObjects { get; set; }
        }

        class Hobby
        {
            public ObjectId Id { get; set; }
            public string Name { get; set; }
            public ObjectId Creator { get; set; }
            public User CreatorObject { get; set; }
        }

        async static Task Example04(IMongoDatabase database)
        {
            var users = database.GetCollection<BsonDocument>("users");

            //var id = ObjectId.GenerateNewId();
            //await hobbies.InsertManyAsync(new[] {
            //    new Hobby { Id = ObjectId.GenerateNewId(), Name = "Hobby A", Creator = id },
            //    new Hobby { Id = ObjectId.GenerateNewId(), Name = "Hobby B", Creator = id },
            //    new Hobby { Id = ObjectId.GenerateNewId(), Name = "Hobby C", Creator = id },
            //    new Hobby { Id = ObjectId.GenerateNewId(), Name = "Hobby D", Creator = id },
            //    new Hobby { Id = ObjectId.GenerateNewId(), Name = "Hobby E", Creator = id },
            //    new Hobby { Id = ObjectId.GenerateNewId(), Name = "Hobby F", Creator = id }
            //});

            //var ids = await hobbies.Find(new BsonDocument { }).Project(p => p.Id).ToListAsync();
            //await users.InsertOneAsync(new User { Id = id, Name = "User A", Hobbies = ids });

            var result = await users
                .Find(new BsonDocument { { "Name", "User A" } })
                .ToListAsync();
            Console.WriteLine(result.ToJson());
            Console.WriteLine();

            var pipeline = new BsonDocumentStagePipelineDefinition<BsonDocument, BsonDocument>(
                 new[] {
                   new BsonDocument{ { "$match", new BsonDocument { { "Name", "User A" } } } }
                 }
            );

            result = await users
                .Aggregate(pipeline)
                .ToListAsync();
            Console.WriteLine(result.ToJson());
            Console.WriteLine();

            pipeline = new BsonDocumentStagePipelineDefinition<BsonDocument, BsonDocument>(
                new[] {
                    new BsonDocument {
                        { "$lookup",
                            new BsonDocument {
                                { "from", "hobbies" },
                                { "localField", "Hobbies"},
                                { "foreignField", "_id" },
                                { "pipeline", new BsonArray {
                                    new BsonDocument {
                                        { "$lookup", new BsonDocument {
                                            { "from", "users" },
                                            { "localField", "Creator" },
                                            { "foreignField", "_id" },
                                            { "as", "CreatorObject" }
                                        }}
                                    }}
                                },
                                { "as", "HobbyObjects" }
                            }
                        }
                    },
                    new BsonDocument {
                        { "$unwind",
                            new BsonDocument {
                                { "path", "$HobbyObjects" }
                            }
                        }
                    },
                    new BsonDocument {
                        { "$unwind",
                            new BsonDocument {
                                { "path", "$HobbyObjects.CreatorObject" }
                            }
                        }
                    },
                    new BsonDocument {
                        { "$group",
                            new BsonDocument {
                                { "_id", "$_id" },
                                { "Name", new BsonDocument { { "$first", "$Name" } } },
                                { "Hobbies", new BsonDocument { { "$first", "$Hobbies" } } },
                                { "HobbyObjects", new BsonDocument { { "$push", "$HobbyObjects" } } }
                            }
                        }
                    }
                }
            );

            result = await users
                .Aggregate(pipeline)
                .ToListAsync();
            Console.WriteLine(result.Select(document => BsonSerializer.Deserialize<User>(document)).ToList().ToJson());
            Console.WriteLine();
        }

        class Device
        {
            public ObjectId Id { get; set; }
            public string Name { get; set; }
            public IList<int> Measurements { get; set; }
            public IList<DateTime> Failures { get; set; }

            public Device()
            {
                this.Measurements = new List<int>();
                this.Failures = new List<DateTime>();
            }
        }

        async static Task Example02(IMongoDatabase database)
        {
            var collection = database.GetCollection<Device>("devices");

            var documents = new[] {
                new Device {
                    Name = "Temperature",
                    Measurements = { -10, -5, -3, 0, 1, 3, 7, 10, 13, 17, 23, 28, 36 },
                    Failures = { new DateTime(2000, 1, 1), new DateTime(2008, 1, 1), new DateTime(2022, 1, 1) }
                },
                new Device  {
                    Name = "Humidity",
                    Measurements = { 10, 40, 30, 80, 60, 35, 70, 90, 15, 25, 60 },
                    Failures = { new DateTime(2000, 1, 1), new DateTime(2008, 1, 1), new DateTime(2022, 1, 1) }
                }
            };

            //await collection.InsertManyAsync(documents);

            Console.WriteLine(await collection.CountDocumentsAsync(new BsonDocument { }));
            Console.WriteLine(await collection.CountDocumentsAsync(Builders<Device>.Filter.Empty));
            Console.WriteLine();

            Console.WriteLine((await collection.Find(new BsonDocument { }).ToListAsync()).ToJson());
            Console.WriteLine((await collection.Find(Builders<Device>.Filter.Empty).ToListAsync()).ToJson());
            Console.WriteLine();

            var filter = Builders<Device>.Filter.Eq(f => f.Name, "Temperature");
            Console.WriteLine((await collection.Find(filter).ToListAsync()).ToJson());
            Console.WriteLine((await collection.Find(f => f.Name == "Temperature").ToListAsync()).ToJson());
            Console.WriteLine();

            var builder = Builders<Device>.Filter;
            filter = builder.Eq(f => f.Name, "Temperature") & builder.AnyEq(f => f.Measurements, 10);
            Console.WriteLine((await collection.Find(filter).ToListAsync()).ToJson());
            Console.WriteLine((await collection.Find(f => f.Name == "Temperature" && f.Measurements.Any(e => e == 10)).ToListAsync()).ToJson());
            Console.WriteLine();

            var sort = Builders<Device>.Sort.Ascending(f => f.Name);
            Console.WriteLine((await collection.Find(new BsonDocument { }).Sort(sort).ToListAsync()).ToJson());
            Console.WriteLine((await collection.Find(new BsonDocument { }).SortBy(f => f.Name).ToListAsync()).ToJson());
            Console.WriteLine();

            var projection = Builders<Device>.Projection.Expression(f => new Device { Id = f.Id, Name = f.Name, Measurements = f.Measurements });
            Console.WriteLine((await collection.Find(new BsonDocument { }).Project(projection).ToListAsync()).ToJson());

            projection = Builders<Device>.Projection.Expression(f => new Device { Id = f.Id, Name = f.Name, Measurements = f.Measurements.Where(e => e > 10).ToList() });
            Console.WriteLine((await collection.Find(new BsonDocument { }).Project(projection).ToListAsync()).ToJson());

            projection = Builders<Device>.Projection.Include(f => f.Id).Include(f => f.Name).Include(f => f.Measurements);
            Console.WriteLine((await collection.Find(new BsonDocument { }).Project(projection).ToListAsync()).ToJson());
            Console.WriteLine((await collection.Find(new BsonDocument { }).Project(
                p => new Device { Id = p.Id, Name = p.Name, Measurements = p.Measurements.Where(e => e > 10).ToList() }).ToListAsync()).ToJson());
            Console.WriteLine();

            Console.WriteLine(
                (await collection
                .Find(new BsonDocument { })
                .Project(
                    p => new Device
                    {
                        Id = p.Id,
                        Name = p.Name,
                        Measurements = p.Measurements.Where(e => e > 10).ToList(),
                        Failures = p.Failures.Where(e => e < DateTime.Now).ToList()
                    })
                .ToListAsync()).ToJson());
            Console.WriteLine();
        }

        async static Task Example01(IMongoDatabase database)
        {
            var collection = database.GetCollection<BsonDocument>("devices");

            var documents = new[] {
                new BsonDocument {
                    { "name", "Temperature" },
                    { "measurements", new BsonArray { -10, -5, -3, 0, 1, 3, 7, 10, 13, 17, 23, 28, 36 } }
                },
                new BsonDocument  {
                    { "name", "Humidity" },
                    { "measurements", new BsonArray { 10, 40, 30, 80, 60, 35, 70, 90, 15, 25, 60 } }
                }
            };

            //await collection.InsertManyAsync(documents);

            Console.WriteLine(await collection.CountDocumentsAsync(new BsonDocument { }));
            Console.WriteLine(await collection.CountDocumentsAsync(Builders<BsonDocument>.Filter.Empty));
            Console.WriteLine();

            Console.WriteLine((await collection.Find(new BsonDocument { }).ToListAsync()).ToJson());
            Console.WriteLine((await collection.Find(Builders<BsonDocument>.Filter.Empty).ToListAsync()).ToJson());
            Console.WriteLine();

            var filter = Builders<BsonDocument>.Filter.Eq("name", "Temperature");
            Console.WriteLine((await collection.Find(filter).ToListAsync()).ToJson());
            Console.WriteLine();

            var builder = Builders<BsonDocument>.Filter;
            filter = builder.Eq("name", "Temperature") & builder.AnyEq("measurements", 10);
            Console.WriteLine((await collection.Find(filter).ToListAsync()).ToJson());
            Console.WriteLine();

            var sort = Builders<BsonDocument>.Sort.Descending("age");
            Console.WriteLine((await collection.Find(new BsonDocument { }).Sort(sort).ToListAsync()).ToJson());
            Console.WriteLine();

            var projection = Builders<BsonDocument>.Projection.Exclude("_id");
            Console.WriteLine((await collection.Find(new BsonDocument { }).Project(projection).ToListAsync()).ToJson());
            Console.WriteLine();
        }
    }
}