/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { ProductType } from "../services/products";
import { useCart } from "./hooks/useCart";
import SuccessToast from "./successToast";

type ProductDetailsProps = {
  product: ProductType;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { addProduct } = useCart();

  return (
    <Row>
      <Col lg={6}>
        <img className="img-fluid" src={product.imageUrl} alt={product.name} />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          onClick={() => {
            addProduct(product);
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
          }}
        >
          Compre agora
        </Button>

        <SuccessToast
          toastIsOpen={toastIsOpen}
          setToastIsOpen={setToastIsOpen}
        />
      </Col>
    </Row>
  );
};

export default ProductDetails;
