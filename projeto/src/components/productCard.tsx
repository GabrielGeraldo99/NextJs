/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { ProductType } from "../services/products";
import { useCart } from "./hooks/useCart";
import SuccessToast from "./successToast";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { id, name, imageUrl, price } = product;
  const { addProduct } = useCart();
  return (
    <>
      <Card>
        <Link href={`/products/${id}`}>
          <img className="card-img-top" src={imageUrl} alt={name} />
        </Link>

        <CardBody>
          <Link href={`/products/${id}`}>
            <h5 className="card-title" style={{ cursor: "pointer" }}>
              {name}
            </h5>
          </Link>

          <CardSubtitle className="mb-3 text-muted" tag="h6">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </CardSubtitle>

          <Button
            color="dark"
            className="pb-2"
            block
            onClick={() => {
              addProduct(product);
              setToastIsOpen(true);
              setTimeout(() => setToastIsOpen(false), 1000 * 3);
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardBody>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  );
};

export default ProductCard;
