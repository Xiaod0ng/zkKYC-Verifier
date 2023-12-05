import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import DummyBank from "./DummyBank";
import {
  Center,
  Card,
  Image,
  CardBody,
  Container,
  Text,
} from "@chakra-ui/react";

function App() {
  // Set to "true" to bypass the Polygon ID check process
  const [provedAccess, setProvedAccess] = useState(false);
  return (
    <>
      {provedAccess ? (
        <DummyBank />
      ) : (
        <Center className="vc-check-page">
          <Container>
            <Card
              style={{
                border: "2px solid #805AD5",
              }}
            >
              <CardBody style={{ paddingBottom: 0 }}>
                <Text fontSize="xl" fontWeight="semibold">
                  Finish KYC process to use the platform
                </Text>

                <PolygonIDVerifier
                  publicServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                  }
                  localServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                  }
                  credentialType={process.env.CREDENTIAL_TYPE}
                  onVerificationResult={setProvedAccess}
                />
                <Image src="" alt="" borderRadius="lg" />
              </CardBody>
              <a>
                <p
                  style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "0",
                    fontSize: "10px",
                  }}
                >
                  Created by XD
                </p>
              </a>
            </Card>
          </Container>
        </Center>
      )}
    </>
  );
}

export default App;
