class Rent {
    
    constructor(isRented, dateRented, storage =[]){
        this.isRented = isRented;
        this.dateRented = dateRented;
        this.storage  = storage;
        
          
       
    }

    static dateFormat(){
        const now =  new Date();
        let day = now.getDate();
        let month = now.getMonth()

        return {
            day,
            month
        }
    }

    
    

    removeRentedMove(remove){
        let moviesAvail = [];
        this.storage.filter(item=>{
            if(item !== remove){    
                moviesAvail.push(item)
                
            }
        })
       console.log("\n")
       console.log("Here are current movies in store now !!!")
       const res = moviesAvail.forEach(item=>console.log(`<li>${item}</li>`))
        
       

    }



     rentedMovie(leased){
     let movies = this.storage;
       movies.filter(((item, index)=>{
          if(item == leased){
             let res = prompt("press 2 to rent but if you choose to cancell press any key")

             console.log("\n")
             if(res == "2"){

                //formting our date in date object
                  let datePro = Rent.dateFormat();
                  let format;
                  if(!datePro.day ==   1 || 2 || 3){
                        format = `${datePro.day}th`;
                  }else if(datePro.day == 1){
                        format = `${datePro.day}st` ;    
                  } else if(datePro.day == 2){
                         format = `${datePro.day}nd`;
                  }else if(datePro.day == 3){
                        format = `${datePro.day}ard`
                  }
                  console.log(`${leased} has  been rented! on ${format}, Thanks for choosing Genie Gallery`)
                  customer.removeRentedMove(leased)
             }else if(res != 2){
                console.log("process cancelled!!")
                
             }  
          }
       }))

       
        

    }


    optionsAvailable(resquestMovie){
        const opt = prompt("Press 1 to show you movie gallery and each slot!");
        let moviesGallery = this.storage;
        if(opt == 1){
            console.log(`Welcome Genie Movie Gallery`)
            console.log(moviesGallery) 

            console.log("\n")
        

            console.log("movies and their slots ")
            for(let i = 0; i < moviesGallery.length; i++){
                let currIndex = i + 1;
                   console.log(`slot ${currIndex}=> ${moviesGallery[i]}`)
              }

            console.log("\n")
           setTimeout(()=>{
                console.log("Ok! you entered the movie you wanted!!!")
                let count = 0
                console.log("fetching request from server......")
                 const timer = setInterval(()=>{
                      count++;
                      if(count <= 3){
                         console.log(count)
                      }else{
                        clearInterval(timer)
                        console.log(`request status:${count} completed!`)
                      } 
                  }, 1000)
                  setTimeout(()=>{
                    moviesGallery = moviesGallery.forEach((item)=>{
                        if(item == resquestMovie){
                            console.log(`${resquestMovie} is available in store!!!`)
                           customer.rentedMovie(resquestMovie)  
                        }
                    })

                    

                   

                
                  },4000)
             
           }, 1500)
        }
       
    }



     addMovies(check){
        this.storage.push(check) 
    }


   


}




class  Owner extends Rent{
    constructor( isRented, dateRented, storage = [], _adminName){
        super( isRented, dateRented, storage = []);
        this.adminName = _adminName
      
    }

    // static deleteMovieSlot(){
          
    // }

   

}









//  Instances 
 let customer = new Rent(false,"10th nov 20222", [ "merlin", "Lord of the ring",  "Morgul",  "Seers"])

 let admin = new  Owner( "true", "12 Nov 2023", customer.addMovies("God of war"), "adminOne");
 let admin2 = new Owner("true", "5 Nov 2023", customer.addMovies("smith"), "adminTwo" );





 

/*function add new movies, you can add dis manually by calling the function 
and passing any arg of your choice as your movie
These are the samples below */
//  customer.addMovies("Pirate")
 customer.addMovies("Gamer")
 customer.addMovies("The doom")
 customer.addMovies("dont watch porn part 1")



//shows available movies
 customer.optionsAvailable("God of war")
/*
   TEST WITH THIS FOLLOWING MOVIES OR ADD YOURS BY USING => addmoviess() function
   merlin
   Lord of the ring
   Morgul
   Seers
*/