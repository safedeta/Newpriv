import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Sobre Samuel</h5>

            <p>
              Samuel es un mama huevo, yo lo se, federico lo sabe todos lo sabemos, quien lo niegue es un falso.
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Sobre Federico</h5>

            <p>
              Federico es un tieso ahi mas tieso que tiesin, eso yo lo sé, por eso cree el bot de discord mas increible de todos: "Tiesorico 2.0", sin embargo el mundo no me comprende y no lo usan, traste :c
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://youtu.be/dQw4w9WgXcQ?si=6RpC-7iNytFMKsoB'>
          DAME CLICK
        </a>
      </div>
    </MDBFooter>
  );
}