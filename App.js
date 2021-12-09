import { Container, Row, Col } from "reactstrap";
import Create from "./components/Create";
import List from './components/List';
import Header from "./components/Header";
import { useState } from "react";
import './App.css';


function App() {

  const [activities, setActivities] = useState([]);

  const addActivity = (activity) =>{
    setActivities([...activities, activity]);
  }
  const deleteActivity = (id) => {
    const newActivities = activities.filter((activity) => activity.id !== id);
    setActivities(newActivities);
  };

    return (
    <Container>
      <Header title='Lista mágica'/>
    <Row>
  <Col>
  <Create addActivity={addActivity} />
  </Col>
  <Col>
     <List activities={activities} deleteActivity={deleteActivity} />
  </Col>
  </Row>
    </Container>
  );
}

export default App;
