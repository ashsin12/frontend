import React from "react";

  import { Link } from "react-router-dom";

  import { Button, Container, Box } from "@material-ui/core";
  import axios from "axios";
  
  
  class Review extends React.Component {
    state = {
      reviews: [],
    };
    componentDidMount() {
      // axios
      //   .get("https://jsonplaceholder.typicode.com/posts")
      //   .then((response) => this.setState({ posts: response.data }))
      //   .catch((error) => console.log(error));
    }
  
    handleDelete = (id) => {
      console.log(id);
   //  axios
        // .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then((res) => {
        //   alert("Deleted post successfully!");
        //   console.log(res);
        //   const posts = this.state.posts.filter((p) => p.id == id);//1
        //   this.setState({ posts: posts });
        // })
        // .catch((error) => console.log(error));
    };
    render() {
      return (
        <div>
          <Container>
            <Box
              style={{ float: "right", marginTop: "20px", marginBottom: "10px" }}
            >
              <Link to="/addreview" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary">
                  Add Review
                </Button>
              </Link>
            </Box>
            {/* <PostTable
              posts={this.state.posts}
              handleDelete={this.handleDelete}
            /> */}
          </Container>
        </div>
      );
    }
  }
  
  export default Review;