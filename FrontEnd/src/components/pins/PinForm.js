import React, {Component} from "react";

class PinForm extends Component {
    constructor(props){
        super(props);
            this.state = {
                pin: {
                    name: "",
                    categoryType: "",
                    lat: 0.0,
                    lng: 0.0,
                    notes: "",
                    user: ""
                }
            }

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    componentDidMount(){
        if(this.props.pin){
          this.setState({pin: {...this.props.pin}})
        }
    }

    handleChange(evt){
        let propertyName = evt.target.name;
        let pin = this.state.pin
        pin[propertyName] = evt.target.value;
        this.setState({pin: pin})
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.pin.id){;
          this.props.onUpdate(this.state.pin)
        } else {
          console.log("Called");
          this.props.onCreate(this.state.pin);
        }
    }

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.pin.name} />
            <input type="text" placeholder="Category" name="categoryType" onChange={this.handleChange} value={this.state.pin.categoryType} />
            <input type="decimal" placeholder="Latitude" name="lat" onChange={this.handleChange} value={this.state.pin.lat}/>
            <input type="decimal" placeholder="Longitude" name="lng" onChange={this.handleChange} value={this.state.pin.lng}/>
            <input type="text" placeholder="Notes" name="notes" onChange={this.handleChange} value={this.state.pin.notes} />
            <input type="text" placeholder="User" name="user" onChange={this.handleChange} value={this.state.pin.user} />
            <button type="submit">Save</button>
            </form>
            </div>
        )
    }
}

export default PinForm;