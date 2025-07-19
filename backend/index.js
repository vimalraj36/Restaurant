const express=require('express')
const app=express()
app.use(express.json())
const cors=require('cors');

const bodyParser=require("body-parser")
const mysql=require("mysql")
const PORT=5000;
app.use(cors());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'Royal_Hotel',
    password:''
});
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database connected successfully...");
    }
})
app.post('/submit',(req,res)=>{
    
    const {name,mobile,subject}=req.body;
    if(mobile.length<10){
        return res.status(400).json({message:'mobile number should be 10 digits'});
    }
    db.query('SELECT * FROM customers WHERE mobile=?',[mobile],(err,result)=>{
        // console.log(result);
        
        if(err){
           return res.status(500).json({message:"Database error"});
        }
        if(result.length>0){
           return res.status(400).json({message:'mobile number already exists'});
        }
        console.log(name,mobile,subject);    
        db.query('INSERT INTO customers (NAME,MOBILE,SUBJECT) VALUES(?,?,?)',[name,mobile,subject],(err,result)=>{
        if(err){
            console.error("Error in inserting data:",err);
            return res.status(500).json({message:"Database error"});
        }
        res.status(201).json({message:"Data submitted successfully", data : result});
        
    });
  });
});
app.post('/api/confirm-booking', (req, res) => {
    const { userId, username, bookedTables, date, timeFrom, timeTo } = req.body;

    if (!userId || !username || !bookedTables || bookedTables.length === 0 || !date || !timeFrom || !timeTo) {
        return res.status(400).send('Incomplete booking data');
    }

    const timeFromFull = `${date} ${timeFrom}`;
    const timeToFull = `${date} ${timeTo}`;

    const queries = bookedTables.map(tableIndex => {
        const tableId = tableIndex + 1;
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO booking (user_id, username, table_no, time_from, time_to)
                           VALUES (?, ?, ?, ?, ?)`;
            db.query(query, [userId, username, tableId, timeFromFull, timeToFull], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });

    Promise.all(queries)
        .then(() => res.send('All tables booked successfully'))
        .catch(err => {
            console.error('Booking error:', err);
            res.status(500).send('Failed to book all tables');
        });
});


app.listen(PORT,()=>{
    console.log(`server running @ port ${PORT}`);
})