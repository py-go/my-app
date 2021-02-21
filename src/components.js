import { buildQueries } from "@testing-library/react";
import React from "react";
import { Table, Jumbotron, Button } from "react-bootstrap";

export function Home() {
  return <Jumbotron>
    <h1>Hola!</h1>
    <p>
      This is a simple react ui to display the structured dataset that could be used to train a machine learning model
      .
</p>
    <p>
      <Button variant="primary" href="https://reactjs.org">Learn more</Button>
    </p>
  </Jumbotron>
}
export function RenderBid(props) {
  const { type, bids } = props

  return <div style={{ padding: '3rem' }}>
    <br />
    <h3>Here are the list of attributes that we can feed to our ML models:</h3>
    <br />

    <Table striped bordered hover responsive>
      <thead>
        <tr>

          <th>Price	</th>
          <th>Size	</th>
          <th>Latency	</th>
          <th>Media Type	</th>
          <th>Winner</th>

        </tr>
      </thead>
      <tbody>
        {bids.biddings && Object.keys(bids.biddings).map((key) => {
          return bids.biddings[key].map(function (bid, index) {
            return <tr key={index} variant="primary" style={{ backgroundColor: (bid.winner && "#d4edda") || bid.cpm == 0 && "#f5c6cb" }}>
              <td>{bid.cpm}</td>
              <td>{bid.size}</td>
              <td>{bid.latency}</td>
              <td>{bid.mediaType}</td>
              <td>{bid.winner && "True" || "False"}</td>


            </tr>
          })
        })}
      </tbody>
    </Table>
  </div>
}
