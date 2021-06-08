import Carousel from "./Carousel";

const App = () => {
  return (
    <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
      <Carousel
        show={4}
        infiniteLoop>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
          </div>
        </div>
      </Carousel>
    </div>

  )
}

export default App