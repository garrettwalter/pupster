import axios from 'axios';
import React, { Component } from 'react';
import API from "../../API/API.js";
import Dislike from '../../components/Button/Dislike.jsx';
import Like from '../../components/Button/Like.jsx';



class Discover extends Component {

    state = {
        count: 0,
        image: "",
    };

    componentDidMount(){
        this.getNewDog();
    }

    getNewDog = () => {
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((response)=> {
                console.log(response.data.message);
                this.setState({image: response.data.message})
            })
            .catch((err)=>{
                console.log(err)
            })
    }


  handleLike = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const yourLuckyNumber = 3;

    if (randomNumber === yourLuckyNumber) {
      alert("The dog likes you too!");
    }
    this.getNewDog();
  };

    handleDislike = () => {
        API.search()
        .then(res => this.setState({ image: res.data.message }))
      .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <img src={this.state.image} alt="dog" height="400px" width="400px"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Dislike handleDislike={this.handleDislike}/> 
                        <div>- - - - - - - - - - - - - - - - - - - - - - - - - -</div>
                        <Like handleLike={this.handleLike}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discover;