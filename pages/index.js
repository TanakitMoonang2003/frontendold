import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link  from 'next/link'
import styles from '@/styles/Home.module.css'

export default function index() {
  return (
    <>
    <Head>
      <title>Home Comin</title>
    </Head>

    <div>
    <header>
  <nav className="navbar navbar-expand-lg bg-#e3f2fd;">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href=".">หน้าแรก</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" href="/about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link " href="Contact">ช่องทางการติดต่อ</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </header>
    </div>

<main>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2000}>
      <img src="/22.jpg" className="d-block w-100" alt="LOL(1)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div className="carousel-item" data-bs-interval={2000}>
      <img src="/00.jpg" className="d-block w-100" alt="LOL(2)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div className="carousel-item">
      <img src="/11.jpg" className="d-block w-100" alt="LOL(5)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br/>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <img className='bd-placeholder-img rounded-circle' width={140} height={140} src='logo2.jpg'></img>
      <h2 className="fw-normal">Cybertice</h2>
      <p><Link className="btn btn-secondary" href="https://www.cybertice.com/">View details »</Link></p>
    </div>
    <div className="col-lg-4">
      <img className='bd-placeholder-img rounded-circle' width={140} height={140} src='Untitled-2.png'></img>      
      <h2 className="fw-normal">Allnewstep</h2>
      <p><Link className="btn btn-secondary" href="https://www.allnewstep.com/">View details »</Link></p>
    </div>
    <div className="col-lg-4">
      <img className='bd-placeholder-img rounded-circle' width={140} height={140} src='logo3.jpg'></img>  
      <h2 className="fw-normal">Arduitronics</h2>
      <p><Link className="btn btn-secondary" href="https://www.arduitronics.com/">View details »</Link></p>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Cybertice <span className="text-body-secondary"></span></h2>
      <p className="lead">สอนใช้งาน NodeMCU ESP32 ส่งข้อความ สติ๊กเกอร์ รูปภาพ แจ้งเตือนผ่าน LINE Notify (2022)</p>
    </div>
    <div className="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src='banner3.jpg'></img>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">Arduitronics<span className="text-body-secondary"></span></h2>
      <p className="lead">ประกาศวันนี้ </p>
      <p className='lead'>" วันพุธที่ 30 ส.ค. 2566 ร้านหยุดส่งของ 1 วันนะคะ ลูกค้ายังคงสามารถสั่งของหน้าเวปได้ปกติแล้วทางทีมงานจะกลับมาส่งของให้ในวันพฤหัสบดี ที่ 31 สค 2566 อีกครั้งค่ะ"</p>
    </div>
    <div className="col-md-5 order-md-1">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src='banner2.jpg'></img>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Allnewstep<span className="text-body-secondary">.</span></h2>
      <p className="lead">สั่งซื้อสินค้าได้แล้วที่นี้</p>
      <p className="lead">สินค้าส่งไวทันใจคุณลูกค้าทุกท่านแน่นอน</p>
      <p className="lead">มีสินค้ามากมายหลายอย่างให้ท่านเลือก ในความคิดสร้างสรรค์มาใช้งานอย่างเกิดประโยชน์</p>
      <p className="lead">ราคาเริ่มต้นอยู่ที่ 5 บาท ไม่รวมค่าส่ง มีสินค้าให้ท่านเลือก</p>
    </div>
    <div className="col-md-5">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src='banner1.jpg'></img>
    </div>
  </div>
  <hr className="featurette-divider" />
</div>
</main>

<footer className="container">
<div>
  <div className="b-example-divider" />
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

</footer>
    </>
  )
}