import "./App.css";
import { useState } from "react";
import PolygonIDVerifier from "./PolygonIDVerifier";
import VcGatedDapp from "./VcGatedDapp";
import { Center, Card, Image, CardBody, Container } from "@chakra-ui/react";

function App() {
  // Set to "true" to bypass the Polygon ID check process
  const [provedAccessBirthday, setProvedAccessBirthday] = useState(false);
  return (
    <>
      {provedAccessBirthday ? (
        <VcGatedDapp />
      ) : (
        <Center className="vc-check-page">
          <Container>
            <Card
              style={{
                border: "2px solid #805AD5",
              }}
            >
              <CardBody style={{ paddingBottom: 0 }}>
                <p>Finish KYC process to use the platform.</p>

                <PolygonIDVerifier
                  publicServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_PUBLIC_URL
                  }
                  localServerURL={
                    process.env.REACT_APP_VERIFICATION_SERVER_LOCAL_HOST_URL
                  }
                  credentialType={"KYCAgeCredential"}
                  issuerOrHowToLink={
                    "https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4"
                  }
                  onVerificationResult={setProvedAccessBirthday}
                />
                <Image src="" alt="" borderRadius="lg" />
              </CardBody>
              <a>
                <p
                  style={{
                    position: "absolute",
                    bottom: "-15px",
                    right: "0",
                    fontSize: "8px",
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
