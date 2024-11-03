body{
    background-color: #F4F1DE;
}
form{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 80px 1fr 1fr;
}
.card{
    box-shadow: 6px 4px 8px rgba(0, 0, 0, 0.6);
    height: 250px;
    width: 400px;
    grid-column: 3/5;
    background-color: #5F5449;
    grid-row: 2;
    border-radius: 20px;
    padding: 30px;
}

#front{
    z-index: 2;
    
    /* margin: 10%; */
    display: grid;
    grid-template-columns: 1fr 135px; /*ai told me to do this */
    grid-template-rows: auto auto auto auto; /*ai told me to do the auto trick*/
    gap: 15px; /*and this*/

}

/* .card_buffer{
    

} */

.card-image{
    grid-column: 2;
    grid-row: 1;
    justify-self: end;  /*and this*/
    height: 55px;
    /* align-self: start; */
    margin-top: 10px;
}
#front p{
    grid-column:1;
    grid-row: 1;
    margin: 0;
    margin-top: 30px;
    color: white;
    font-size: 1.5rem;
}
label{
    display: block;
    color: white;
    margin-bottom: 5px;
    font-size: 1.3rem;
}
#card_number{
    grid-column: 1/-1;  /*and this*/
    grid-row: 2;
    width: 154%;  /*and this*/
    padding: 8px /*and this*/
}
.card-holder-group /*and this whole class*/{
    grid-column:1;
    grid-row: 3;
    
    
}
#card_holder{
    width:  85%;
    padding: 8px;
}

/* #card_holder{
    grid-column: 1;
    grid-row: 4;
} */
.expiration-group/*and this whole group too*/{
    grid-column: 2;
    grid-row: 3;
    /* display: flex; */
    /* flex-wrap: wrap; */
    
}
.expiration-group div {
    display: flex;
    justify-content:space-between; 
    /* gap: auto; */
}
#experation, #exp_year{
    width: 40px;
    padding: 8px;
    
} 
input {
    border-radius: 4px;
    border: 1px solid #ccc;
}






#back{
    margin-top: 50px;
    margin-bottom: -50px;
    margin-left: 120px;
    margin-right: -120px;
    z-index: 1;
    display: grid;
    grid-template-rows: 10% auto 1fr 20% ;
}
/* .black_stripe{
    height: 60px;
    width: 100%;
    grid-rows: 2;
    background-color: #5F5449;
    z-index: 3;
}
.cvc-group{

} */
button{
    background-color: #03045E;
    max-width: 80px;
    max-height: 40px;
    margin-top: 60px;
    margin-left: -20px;
    grid-row: 3;
    grid-column: 5;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
    color: WHITE;
    font-weight: bolder;
    border-radius: 10px;

}