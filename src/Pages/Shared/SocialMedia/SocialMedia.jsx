import { useContext } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { FaGoogle, FaFacebook, FaTwitch, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";



const SocialMedia = () => {
  const {ProviderLogIn} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();


  const handleGoogleSignIn = () => {
    
    ProviderLogIn(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    }).catch(error => {
      console.error(error);
    })

  }



  return (
    <div className="flex item-center">
      <ButtonGroup className="w-100" vertical>
        <Button className="mb-2" variant="outline-primary" onClick={handleGoogleSignIn}>
          {" "}
          <FaGoogle></FaGoogle> LogIn with Google
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaLinkedin></FaLinkedin> LogIn with LinkedIn
        </Button>
      </ButtonGroup>
      <h5 className="my-2">Find Us On </h5>
      <ListGroup>
        <ListGroup.Item className="mb-2"> <FaFacebook></FaFacebook> Facebook </ListGroup.Item>
        <ListGroup.Item className="mb-2"> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
        <ListGroup.Item className="mb-2"> <FaTwitch></FaTwitch> Twitch </ListGroup.Item>
        <ListGroup.Item className="mb-2"> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        <ListGroup.Item className="mb-2">Click For More</ListGroup.Item>
      </ListGroup>
      <BrandCarousel className="mt-2"></BrandCarousel>
    </div>
  );
};

export default SocialMedia;
