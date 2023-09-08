import Col from "react-bootstrap/Col";
import { Component } from "react";

class GalleryCard extends Component {
  render() {
    return (
      <Col className="d-flex" xs={4} md={3} lg={2} xxl={1} key={this.props.key}>
        <img className="img-rules" src={this.props.data.Poster} alt="poster" />
      </Col>
    );
  }
}

export default GalleryCard;
