import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTaskForm from './components/AddTaskForm'
import Footer from './components/Footer'
import About from './components/About'

import AppContext from './context/app/appContext'

function App() {
  const appContext = useContext(AppContext)

  const { getTasks, saveTasks, tasks } = appContext

  const [showAddTask, setShowAddTask] = useState(false)

  const [initLoad, setInitLoad] = useState(true)

  // componentDidMount
  useEffect(() => {
    const updateInitLoad = () => {
      setInitLoad(false)
    }

    getTasks()
    updateInitLoad()
    // eslint-disable-next-line
  }, [])

  // // componentDidUpdate
  useEffect(() => {
    // Only update after init load
    if (!initLoad) {
      saveTasks()
    }
  }, [tasks, initLoad])

  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        <Routes>
          <Route path="about" element={<About />} />
          <Route
            path="/"
            element={
              <>
                {showAddTask && <AddTaskForm />}

                {tasks.length ? <Tasks tasks={tasks} /> : <h3>No Tasks</h3>}
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
