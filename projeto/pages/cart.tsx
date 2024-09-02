import { NextPage } from "next";
import Head from "next/head";
import { Container } from "reactstrap";
import CartTotal from "../src/components/cartTotal";
import Header from "../src/components/header";
import CartTable from "./../src/components/cartTable";

const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">Carrinho</h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
    </>
  );
};

export default Cart;
