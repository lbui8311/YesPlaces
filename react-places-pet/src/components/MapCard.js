import Card from 'react-bootstrap/Card';
function MapCard({photo}) {
    return (
      <Card
      style={{
        border: 'solid 3px',
        maxWidth: 'auto',
        borderRadius: '10px',
        backgroundColor: '#dcedf6',
        height: '275px',
      }}
    >
      <Card.Body className='overflow-y-scroll'>

      <label><iframe className="map" title='map'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.5601165311286!2d-117.07398172400573!3d32.7774046736634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95686a6a04a21%3A0xc39f2ac6bf82f916!2sSan%20Diego%20State%20University!5e0!3m2!1sen!2sus!4v1687987885502!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></label>
      </Card.Body>
    </Card>  
    );
}
  
  export default MapCard;