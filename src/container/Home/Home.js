import React, { useState, useEffect } from "react";
import Product from "../../components/Product/Product";
import { Container, Grid, Segment, Dimmer, Loader } from "semantic-ui-react";
import "./Home.css";
import { db } from "../../Firebase/FirebaseConfig";
import Slider from "./../../components/slider/Slider"
import AdminOnlyRoute from "../../components/adminOnlyRoute/AdminOnlyRoute";
import HomeIcons from "./HomeIcons/HomeIcons";
// import Marquee from "react-fast-marquee";

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("Products").onSnapshot((snapshot) => {
      setProduct(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, [setProduct]);
  console.log(product);

  return (
    <>
    <div className="home">
      <Slider/>
      <HomeIcons/>
   
      {/* {loading ? (
        <Segment className="home__segment">
          <Dimmer active inverted>
            <Loader size="large" className="home__loaderMessage">
              Loading...
            </Loader>
          </Dimmer>
        </Segment>
      ) : (
        <Container>
          <Grid container columns={4} doubling stackable>
            {product.map((product) => {
              return (
                <Grid.Column key={product.id} mobile={16} tablet={8} computer={4}>
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  imageUrl={product.imageUrl}
                />
                </Grid.Column>
              );
            })}
          </Grid>
        </Container>
      )} */}
         {/* <Marquee className="d-flex"><h2>Jordans are back in stock</h2></Marquee> */}
      </div>
      
      </>
  );
}

export default Home;
