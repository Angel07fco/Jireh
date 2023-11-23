import React from 'react';
import NavbarAdmin from '../../components/NavbarAdmin';
import Footer from '../../components/Footer';
import '../../assets/styles/Admin/Citas.css';
import { Button, Link } from '@mui/material';

function Citas() {
  return (
    <div>

      <div className='admin-citas'>

        <NavbarAdmin />

        <div className='contenidoC'>

          <h1>Citas registradas</h1>

          <Link href="/admin/agendar" className='link-button'>
            <Button variant="contained" fullWidth className='button-citas'>Agendar nueva cita</Button>
          </Link>

          <div className='calendar'>

            <div className='mont'>
              Noviembre
            </div>

            <div className='date'>
              <div>L</div>
              <div>M</div>
              <div>M</div>
              <div>J</div>
              <div>V</div>
              <div>S</div>
              <div>D</div>
            </div>

            <div className='days'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4
                <section className='card'>
                  <section className='card2'>
                    <span class="material-symbols-outlined">account_circle</span>
                    <h5 className='user'>Angel MH</h5>
                  </section>
                  <Link href="/admin/cita">
                    <Button fullWidth variant="contained" className='link-citaView'>Detalles</Button>
                  </Link>
                </section>
              </div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>
                10
                <section className='card'>
                  <section className='card2'>
                    <span class="material-symbols-outlined">account_circle</span>
                    <h5 className='user'>Angel MH</h5>
                  </section>
                  <Link href="/admin/cita">
                    <Button fullWidth variant="contained" className='link-citaView'>Detalles</Button>
                  </Link>
                </section>
              </div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
              <div>16
              <section className='card'>
                  <section className='card2'>
                    <span class="material-symbols-outlined">account_circle</span>
                    <h5 className='user'>Angel MH</h5>
                  </section>
                  <Link href="/admin/cita">
                    <Button fullWidth variant="contained" className='link-citaView'>Detalles</Button>
                  </Link>
                </section>
              </div>
              <div>17</div>
              <div>18</div>
              <div>19</div>
              <div>20
              <section className='card'>
                  <section className='card2'>
                    <span class="material-symbols-outlined">account_circle</span>
                    <h5 className='user'>Angel MH</h5>
                  </section>
                  <Link href="/admin/cita">
                    <Button fullWidth variant="contained" className='link-citaView'>Detalles</Button>
                  </Link>
                </section>
              </div>
              <div>21</div>
              <div>22</div>
              <div>23</div>
              <div>24</div>
              <div>25</div>
              <div>26</div>
              <div>27</div>
              <div>28</div>
              <div>29</div>
              <div>30</div>
              <div>31
              <section className='card'>
                  <section className='card2'>
                    <span class="material-symbols-outlined">account_circle</span>
                    <h5 className='user'>Angel MH</h5>
                  </section>
                  <Link href="/admin/cita">
                    <Button fullWidth variant="contained" className='link-citaView'>Detalles</Button>
                  </Link>
                </section>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Citas