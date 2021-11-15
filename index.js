const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://victorDemo:wikiwiki@cluster0.6v3xo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();
        //await listDatabses(client);
        /*await createListing(client, {
            name: "Lovely Loft",
            summary: "A charming loft in Paris",
            bedrooms: 1,
            bathrooms: 1
        });*/
        /*await createMultipleListings(client, [
            {
               name: "Lovely View",
                summary: "A charming loft in Barcelona",
                bedrooms: 2,
                bathrooms: 2
            },
            {
                name: "Quiet neighborhood",
                summary: "Peacefull place at Ohio",
                bedrooms: 3,
                bathrooms: 2
            },
            {
                name: "Amazing Weather",
                summary: "Excelent Views",
                bedrooms: 2,
                bathrooms: 1
            },
        ]);*/
        await findListingByName(client, "Amazing Weather");
    }catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);

async function listDatabses(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("***Databases***");
    databasesList.databases.forEach(element => {
        console.log(`- ${element.name}`);
    });
}

/**
 * Mongo stores data on Bson documents
 * Bson is a binary version of json
 * Document => Row
 * Collection => Table
 * Every doc has a _id attribute
 */

//Create documents
async function createUser(client, newUser){
    const result = await client.db("usersNnotes").collection("Users").insertOne(newUser);
    console.log(`New User Inserted With ID: ${result.insertedId}`);
}

async function createMultipleUsers(client, newUsers){
    const result = await client.db("usersNnotes").collection("Users").insertMany(newUsers);
    console.log(`${result.insertedId} New Users Inserted With IDs`);
    console.log(result.insertedIds);
}

async function findUserByName(client, userName){
    //Empty object as parameter of findOne returns all documents on the collection
    const result = await client.db("usersNnotes").collection("Users").findOne({
        name: userName
    });

    if(result){
        console.log(`Found a user in the collection with the name ${userName}`);
        console.log(result);
    }
}

async function createListing(client, newListing){
    //await  client.db("nombre de la base de datos").collection("nombre de la coleccion").insertOne(dato a insertar);
    const result = await client.db("sample_arbnb").collection("listingAndReviews").insertOne(newListing);
    console.log(`New Listing Inserted With ID: ${result.insertedId}`);
}

async function createMultipleListings(client, newListings){
    const result = await client.db("sample_arbnb").collection("listingAndReviews").insertMany(newListings);
    console.log(`${result.insertedCount} New Listings Inserted With IDs`);
    console.log(result.insertedIds);
}

async function findListingByName(client, listingName){
    //Empty object as parameter of findOne returns all documents on the collection
    const result = await client.db("sample_arbnb").collection("listingAndReviews").findOne({
        name: listingName
    });

    if(result){
        console.log(`Found a listing in the collection with the name: ${listingName}`);
        console.log(result);
    }else{
        console.log(`No listing found with the name: ${listingName}`);
    }
}

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
} = {}) {

    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
    const cursor = client.db("sample_airbnb").collection("listingsAndReviews")
        .find({
            bedrooms: { $gte: minimumNumberOfBedrooms },
            bathrooms: { $gte: minimumNumberOfBathrooms }
        }
        )
        .sort({ last_review: -1 })
        .limit(maximumNumberOfResults);

    // Store the results in an array
    const results = await cursor.toArray();

    // Print the results
    if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            const date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${date}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
}
