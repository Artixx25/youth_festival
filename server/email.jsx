const ReactDOMServer = require('react-dom/server');
const React = require('react');

const {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} = require('@react-email/components')

function EmailForm(props) {
  const {
    FirstName,
    LastName,
    Email,
    filmName,
    FilmSinopsis,
    FilmLink,
    Genre,
    FilmDuration,
    shootingGroup,
    actorsRoles,
    Poster,
    Nominations,
  } = props;

  const nominationsArray = JSON.parse(Nominations);

  return (
    <Html>
      <Head />
      <Preview>
        Новый учасник со своим крутым фильмом уже тут! Youth Vision Festival 2024
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={track.container}>
            <Img
              src="https://youthvision.co/YF-logo.png"
              width="400"
              alt="logo"
              style={{margin: 'auto'}}
            />
          </Section>
          <Hr style={global.hr} />
          <Section style={message}>
            <Heading style={{...global.heading, marginTop: '25px', marginBottom: '5px'}}>Новый Учасник!</Heading>
            <Text style={{...global.text, lineHeight: '1', fontSize: '20px', fontWeight: '600', color: '#00000ce0'}}>
              {FirstName + ' ' + LastName}
            </Text>
            <Link href={`mailto:${Email}`} style={{ ...global.text, lineHeight: '1.2', fontSize: '14px', fontWeight: '400' }}>
              {Email}
            </Link>
          </Section>
          <Hr style={global.hr} />
          <Section
            style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
          >
            <Row>
              <Column>
                <Img
                  src={Poster}
                  alt={filmName}
                  style={{
                    float: "left",
                    position: "relative",
                    borderRadius: "5px",
                  }}
                  width="200px"
                />
                <Link href={FilmLink} style={global.buttonWatch}>
                  Смотреть
                </Link>
              </Column>
              <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                <Text
                  style={{
                    ...global.heading,
                    fontWeight: "700",
                    textAlign: "left",
                    lineHeight: "1",
                    margin: "0",
                    marginBottom: "10px",
                  }}
                >
                  {filmName}
                </Text>
                <Text
                  style={{
                    ...global.capsule,
                    display: "inline-flex",
                    marginRight: "8px",
                    marginBottom: "15px",
                  }}
                >
                  {Genre}
                </Text>
                <Text
                  style={{
                    ...global.text,
                    width: "max-content",
                    display: "inline-flex",
                    fontSize: "13px",
                  }}
                >
                  {FilmDuration}
                </Text>
                <Text style={global.synopsis}>
                  {FilmSinopsis}
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />
          <Section style={{...global.defaultPadding, position: 'relative', overflow: 'hidden'}}>
            <Row style={{ display: "inline-flex" }}>
              <Column
                style={{
                  width: "100%",
                  background: "#00000008",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Text style={global.paragraphWithBold}>Номинации</Text>

                {(nominationsArray || []).map((nomination, index) => (
                  <Text key={index} style={track.nomi}>
                    {nomination.name}
                  </Text>
                ))}
              </Column>
            </Row>
          </Section>

          <Hr style={global.hr} />

          <Section style={{...global.defaultPadding, position: 'relative', overflow: 'hidden'}}>
            <Row style={{ display: "inline-flex", gap: '10px' }}>
              <Column
                style={{
                  width: "100%",
                  background: "#00000008",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Text style={global.paragraphWithBold}>Актёры и роли</Text>

                  <Text style={track.nomi}>
                    {actorsRoles}
                  </Text>

              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />

          <Section style={{...global.defaultPadding, position: 'relative', overflow: 'hidden'}}>
            <Row style={{ display: "inline-flex", gap: '10px' }}>
            <Column
                style={{
                  width: "100%",
                  background: "#00000008",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Text style={global.paragraphWithBold}>Съемочная группа</Text>

                  <Text style={track.nomi}>
                      {shootingGroup}
                  </Text>

              </Column>
            </Row>
          </Section>
          <Hr style={global.hr} />

          <Section style={{ ...paddingY, background: "#000" }}>
            <Row style={footer.policy}>
              <Column>
                <Text style={{ ...footer.text, display: "inline-flex" }}>
                  this email was sent from{" "}
                  <Link
                    style={{
                      ...footer.text,
                      display: "inline-flex",
                      marginInline: "5px",
                      color: "#ffffffcc",
                    }}
                    href="www.youthvision.co"
                  >
                    youthvision.co
                  </Link>{" "}
                  2024 © All Rights Reserved
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

module.exports = EmailForm;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  capsule: {
    padding: "0 10px",
    backgroundColor: "rgba(255, 128, 77, 0.2)",
    border: "1px solid rgba(255, 128, 77, 0.4)",
    width: "max-content",
    fontSize: "11px",
    borderRadius: "100px",
    margin: "0",
    color: "rgba(255, 128, 77, 1)",
  },
  buttonWatch: {
    width: "200px",
    height: "40px",
    lineHeight: "40px",
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffffcc",
    background: "linear-gradient(60deg, #8f3f47 -50%, #000000)",
    display: "table-cell",
    top: "5px",
    borderRadius: "5px",
    position: "relative",
    cursor: "pointer",
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold", width: 'max-content' },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  },
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  synopsis: {
    color: "#747474",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "1.3",
    margin: "0 !important",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  },
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "invert(100%)",
  },
  nomi: {
    display: "inline-flex",
    margin: "1px 5px",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
};



const footer = {
  policy: {
    width: "max-content",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  },
};