

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, InputGroup } from 'react-bootstrap';
import { addProduct } from '../Redux/Actions/ProductActions';
const ProductList = () => {
    const dispatch=useDispatch()
    const ListProduct=useSelector(state=>state.ProductReducer.listProduct)
    const [show, setShow] = useState(false);
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState(0)
    const [imgUrl,setImgUrl]=useState("")
    const handleClick=()=>{
        dispatch(addProduct({id:Math.random(),name:name,description:description,price:price,imgUrl:imgUrl}))
        handleClose()
    }

    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>ProductList
        <Button variant="primary" onClick={handleShow}>
        Add new Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Name
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setName(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Description
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setDescription(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Price
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setPrice(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          imgUrl
        </InputGroup.Text>
        <Form.Control
        onChange={(e)=>setImgUrl(e.target.value)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            register product
          </Button>
        </Modal.Footer>
      </Modal>
        {ListProduct.map(product=><ProductCard product={product} key={product.id} />)}

    </div>
  )
}

export default ProductList