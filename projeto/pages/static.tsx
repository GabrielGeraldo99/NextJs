import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse {
  name: string;
  timestamp: Date;
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`);
  const staticData: ApiResponse = await response.json();

  return {
    props: {
      staticData,
    },
    revalidate: 10,
  };
};

const fetchData = async () => {
  const data = await fetch("/api/hello");
  const result: ApiResponse = await data.json();
  return result;
};

const Static: NextPage = (props: {
  children?: ReactNode;
  staticData?: ApiResponse;
}) => {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData().then((result) => {
      setClientSideData(result);
    });
  }, []);

  return (
    <Container tag="main">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <Row>
        <Col>
          <h3>Gerado estaticamente durante o build:</h3>
          <h2>{props.staticData?.timestamp.toString()}</h2>
        </Col>

        <Col>
          <h3>Gerado no cliente:</h3>
          <h2>{clientSideData?.timestamp.toString()}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Static;
