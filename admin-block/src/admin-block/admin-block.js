import React,{Component} from 'react';

class AdminBlock extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('first name:', this.firstName.value);
    console.log('second name:',this.lastName.value)
    this.firstName.value = 'Got ya!';
    this.lastName.value='';
  }
  render() {
    return (
      <div><div className="col-md-4"></div>
      <div className="col-md-4">
        {/* <form onSubmit={this.handleSubmit}>
          <CustomInput
            label={'Name'}
            firstName={input => this.firstName = input} />
            <CustomInput1
            label={'lastName'}
            lastName={input1 => this.lastName = input1} />
     
          <input type="submit" value="Submit" />
        </form> */}
        <h3> Resident</h3>
        <form>
        <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"/>
  </div>
  <div className="form-group">
    <label htmlFor="Vehicle">Vehicle:</label>
    <input type="number" className="form-control" id="vehicle"/>
  </div>
  <div className="form-group">
    <label htmlFor="mobile">Mobile:</label>
    <input type="number" className="form-control" id="mobile"/>
  </div>
  <div className="form-group">
    <label htmlFor="alternateMobile">Alternate Mobile:</label>
    <input type="number" className="form-control" id="alternateMobile"/>
  </div>
  <div className="form-group">
    <label htmlFor="address">Address:</label>
    <input type="text-box" className="form-control" id="address"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <p/>
  <p/>
</form>

<h3> Vendors</h3>
<form className="form">
        <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Mobile:</label>
    <input type="mobile" className="form-control" id="mobile"/>
  </div>
  
  <div class="form-group">
    <label htmlFor="type">Type</label>
    <select  class="form-control" id="">
      <option>Plumber</option>
      <option>Electrician</option>
      <option>Carpenter</option>
      <option>Gardner</option>
      <option>Maid</option>
      <option>Others</option>
    </select>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>

  </form>
      </div></div>
      
    );
  }
}



export default AdminBlock;