import { Card, CardBody } from "reactstrap";
import { ProductType } from "../services/products";
import { useCart } from "./hooks/useCart";

export default function CartTotal() {
  const { cart } = useCart();

  return (
    <Card className="ms-auto" style={{ maxWidth: "20rem" }}>
      <CardBody className="d-flex justify-content-between">
        <strong>Total:</strong>
        <span>
          {cart
            .reduce(
              (total: number, product: ProductType) => total + product.price,
              0
            )
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
      </CardBody>
    </Card>
  );
}
