import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,

  FormText,
  Input,
  Label,

  Button,

} from 'reactstrap';
import axios from 'axios';

// const BASE_URL='http://172.16.5.161:5000/api/dtt/'

class Forms extends Component {

constructor(){
  super()
  this.state = {
    dtt: '',
    spm: '',
    kode_masuk: '',
    nama_farm:'',
    customer: '',
    supir: '',
    no_kendaraan: '',
    no_sim: '',
    ekspedisi: '',
    order_customer_ekor: '',
    order_customer_kg: '',
    lock_order_ekor: '',
    lock_order_kg: '',
    jam_datang: '',
    jam_bongkar: '',
    jam_selesai: '',
    isSubmited: false,
    error: false,
  }
  this.changeHendler = this.changeHendler.bind(this)
}

changeHendler = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

SubmitHandler = (e) => {
e.preventDefault()

axios.post('http://35.201.8.6:5000/api/dtt/',{
  dtt: this.state.dtt,
  spm: this.state.spm,
  kode_masuk: this.state.kode_masuk,
  nama_farm: this.state.nama_farm,
  customer: this.state.customer,
  supir: this.state.supir,
  no_kendaraan: this.state.no_kendaraan,
  no_sim: this.state.no_sim,
  ekspedisi: this.state.ekspedisi,
  order_customer_ekor: this.state.order_customer_ekor,
  order_customer_kg: this.state.order_customer_kg,
  lock_order_ekor: this.state.lock_order_ekor,
  lock_order_kg: this.state.lock_order_kg,
  jam_datang:this.state.jam_datang,
  jam_bongkar: this.state.jam_bongkar,
  jam_selesai: this.state.jam_selesai
})
.then(res => {
  this.setState({
    isSubmited: true,
    error: false
  })
  console.log(res)
  e.target.reset()
})
.catch(error => {
  this.setState({
    error: true,
    isSubmited: false
  })
})
}

  render() {
    const {dtt, spm, kode_masuk, nama_farm, customer, supir, no_kendaraan, no_sim,
    ekspedisi, order_customer_ekor, order_customer_kg, lock_order_ekor, lock_order_kg, 
    jam_bongkar, jam_datang, jam_selesai} = this.state;
    return (
      <div className="animated fadeIn" onSubmit={this.SubmitHandler}>

            <Card>
              <CardHeader>
                <strong>Data Timbang</strong>
              </CardHeader>
                <CardBody>


                    <form>
                      <Label htmlFor="dtt">DTT</Label>
                    <Input type="text" value={dtt} name="dtt" placeholder="Input DTT" required onChange={this.changeHendler} />
                      <br/>

                      <Label htmlFor="spm" >SPM</Label>
                      <Input type="text"  name="spm" value={spm} onChange={this.changeHendler}>
                        {/* <option value={spm}>SPM 1</option>
                        <option value={spm}>SPM 2</option>
                        <option value={spm}>SPM 3</option>
                        <option value={spm}>SPM 4</option>
                        <option value={spm}>SPM 5</option> */}
                      </Input>
                      <br/>

                      <Label htmlFor="kode_masuk">Kode Masuk</Label>
                      <Input type="text" name="kode_masuk" value={kode_masuk} placeholder="123" required onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="nama_farm">Nama Farm</Label>
                      <Input type="text" name="nama_farm" value={nama_farm} placeholder="Enter Farm Name" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="nama_customer">Nama Customer</Label>
                      <Input type="text" name="customer" value={customer} placeholder="Enter Customer Name" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="nama_supir">Nama Supir</Label>
                      <Input type="text" name="supir" value={supir} placeholder="Enter Driver name" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="no_kendaraan">NO. Kendaraan</Label>
                      <Input type="text" name="no_kendaraan" value={no_kendaraan} placeholder="Enter Police Number" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="no_sim">NO. SIM</Label>
                      <Input type="number" name="no_sim" value={no_sim} placeholder="SIM Number" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="ekspedisi">Ekspedisi</Label>
                      <Input type="text" name="ekspedisi" value={ekspedisi} placeholder="Ekspedisi" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="order_customer">Order Customer</Label>
                      <Label htmlFor="ekor">Ekor</Label>
                      <Input type="number" name="order_customer_ekor" value={order_customer_ekor} placeholder="123" onChange={this.changeHendler}/>
                      <FormText color="muted">Kg</FormText>
                      <Input type="number" name="order_customer_kg" value={order_customer_kg}  placeholder="123" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="lock_order">Lock Order</Label>
                      <Label htmlFor="ekor">Ekor</Label>
                      <Input type="number" name="lock_order_ekor" value={lock_order_ekor} placeholder="123" onChange={this.changeHendler}/>
                      <FormText color="muted">Kg</FormText>
                      <Input type="number" name="lock_order_kg" value={lock_order_kg} placeholder="123" onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="jam_datang">Jam Datang</Label>
                      <Input type="time" name="jam_datang" value={jam_datang} onChange={this.changeHendler}/>
                      <FormText className="help-block">Jam Bongkar</FormText>
                      <Input type="time" name="jam_bongkar" value={jam_bongkar} onChange={this.changeHendler}/>
                      <br/>

                      <Label htmlFor="jam_selesai">Jam Selesai</Label>
                      <Input type="time" name="jam_selesai" value={jam_selesai} onChange={this.changeHendler}/>
                      <br/>

                      <Button color="Green" type='submit'>Save</Button>
                      <br/>
                      <Button color="Red">Back</Button>


                      {this.state.isSubmited && <p>Form Submited Successfuly</p>}
                      {this.state.error && <p>Form Submited Failed</p>}
                </form>

              </CardBody>
            </Card>

      </div>
    );
  }
}

export default Forms;