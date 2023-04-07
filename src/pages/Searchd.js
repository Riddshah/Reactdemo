import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Searchd.css';
import {Table,Form} from 'react-bootstrap';
import NSEdata from '../Services/NSEdata';

export default class Searchd extends React.Component{
 
  constructor(props)
  {
      super(props)

      this.state={
          nse:[]
      }
  }

  componentDidMount()
  {
      NSEdata.getTable().then((e)=>{
        this.setState({nse:e.data});
      })
  }

render()
{

return (
<div className='sss'>
<Form>
<Form.Control

type="text" placeholder="Search..."
/>
</Form>



<Table striped bordered hover>
<thead>

<tr>
<th>ISIN</th>

<th>SYMBOL</th>

<th>NAME_OF_COMPANY</th>

<th>SERIES</th>

<th>IDATE_OF_LISTING</th>

<th>PAID_UP_VALUE</th>

<th>MARKET_LOT</th>

<th>FACE_VALUE</th>

<th>SECTOR</th>

<th>INDUSTRY</th>

<th>EXCHANGE</th>

<th>CURRENCY</th>

{/* <th>PRICE</th> */}
</tr>
</thead>

{NSEdata.map(data=>(

<tr key={data.iSIN}>

 <td>{data.iSIN}</td>
 <td>{data.sYMBOL}</td>
 <td>{data.nAME_OF_COMPANY}</td>
 <td>{data.sERIES}</td>
 <td>{data.dATE_OF_LISTING}</td>
 <td>{data.pAID_UP_VALUE}</td>
 <td>{data.mARKET_LOT}</td> 
 <td>{data.fACE_VALUE}</td>
 <td>{data.sECTOR}</td>  
 <td>{data.iNDUSTRY}</td>
 <td>{data.eXCHANGE}</td>
 <td>{data.cURRENCY}</td>

</tr>

  )
 )
}
  </Table>
 </div> 
  )
}
}


