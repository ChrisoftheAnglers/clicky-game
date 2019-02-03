// Dependencies
import React, {Component} from "react";
import Sandor from "./images/Sandor_Clegane_Season_7_Promo_Image.png";

// TODO: Load in images randomly with correct labels
// Array to hold picture filenames (full path will be attached later)
const pictureFilenames = ["Ayra-Stark.jpg", "Bran_Stark_-_Isaac_Hempstead-Wright.jpg", 
"DaenerysTargaryen.jpg", "Eddard_Stark_infobox_new.jpg", "jon-snow-game-of-thrones.jpg", "night-king.jpg",
"Robb_Stark-Richard_Madden.jpg", "Sandor_Clegane_Season_7_Promo_Image.png", "Sansastark706.jpg",
"the-mountain-thrones.jpg", "TheonGreyjoy7x7.jpg", "Tyrion-Lannister-Costume-hand-of-queen.jpg"];
console.log(pictureFilenames);

const picturePath = "../../public/images/";

// function to create a shuffled array to be used when outputting images
// It essentially will go down the length of the array and swap values between indexes
const shuffleArray = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
        // Store random value for index (which will be less than or equal to the index itself) to swap with it
        const j = Math.floor(Math.random() * (i+1)); 
        const temp = array[i]; // Store value of current index
        array[i] = array[j]; // Store value of random index to current index (overwrite)
        array[j] = temp; // Store previous value of array at current index to random index
    }
    return array;
}

// Testing output
//console.log(shuffleArray(pictureFilenames));

class PictureGame extends Component {
    state = {
        score: 0,
        lost: false
    };

    handlePictureClick = event => {

    };

    render() {
        return(
            <div className="container">
                {/* shuffleArray(pictureFilenames).forEach(pic => {
                    console.log(pic);
                    console.log(picturePath + pic);
                    return <div className="click-item" role="img" aria-label="click item" style="background-image: url(../../public/images/Arya-Stark.jpg)"></div>
                }) */}
                <img src={Sandor} alt="" />
                <div className="click-item" role="img" aria-label="click item" style={{backgroundImage: 'url(' + Sandor + ")"}}></div>
            </div>
        )
    };
}
export default PictureGame;