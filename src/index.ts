import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://Mydatabase_owner:FZz5i6aQrnGI@ep-dry-sunset-a5qt973g-pooler.us-east-2.aws.neon.tech/Mydatabase?sslmode=require"
})
 
client.connect()

async function createUsersTable() {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `)
    console.log("Users table created successfully:", result);
}

async function insertData() {
    try {

        const query = "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *";
        const values = ['Arpit', 'Iarpit@10', 'warpit57@gmail.com']
        const res = await client.query(query, values);

        // Uncomment the following lines if you want to insert data directly
        // Note: The following lines are commented out to avoid duplicate inserts and SQL Injection risks
        // Uncommenting these lines will insert the data directly into the database
        // const res = await client.query(`
        //     INSERT INTO users (username, password, email)
        //     VALUES ('Arpit', 'Iarpit@10', 'warpit57@gmail.com')
        //     RETURNING *
        // `)
        
        console.log("Data inserted successfully:", res.rows[0]);
    } catch (error) {
        console.error("Error inserting data:", error);
        throw error;
    }
}

// Execute both operations in sequence
async function main() {
    try {
        // First create the table
        await createUsersTable();
        
        // Then insert the data
        await insertData();
        
        console.log('All operations completed successfully');
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Close the connection only after all operations are complete
        await client.end();
    }
}

// Run the main function
main();


