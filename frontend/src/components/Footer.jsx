import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter style={{ backgroundColor:'#707882'}} className='text-center text-lg-left w-full'>
      <MDBContainer className='p-2'>
        <MDBRow>
          <MDBCol lg='5' md='12' className='mb-2 mb-md-0'>
            <h5 className='text-uppercase'>Footer Sobre Samuel</h5>

            <p className='text-sm'>
              Samuel es un mama huevo, yo lo se, federico lo sabe todos lo sabemos, quien lo niegue es un falso.
            </p>
          </MDBCol>

          <MDBCol lg='5' md='12' className='mb-2 mb-md-0'>
            <h5 className='text-uppercase'>Footer Sobre Federico</h5>

            <p className='text-sm'>
              Federico es un tieso ahi mas tieso que tiesin, eso yo lo sé, por eso cree el bot de discord mas increible de todos: &#34;Tiesorico 2.0&#34;, sin embargo el mundo no me comprende y no lo usan, traste :c
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center text-white p-1' style={{ backgroundColor: '#494a4d'}}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark hover:text-blue-500' href='https://youtu.be/dQw4w9WgXcQ?si=6RpC-7iNytFMKsoB'>
          DAME CLICK
        </a>
      </div>
    </MDBFooter>
  );
}