"use client";

export default function FooterAdmin() {
  return (
    <footer className="footer" style={{ marginTop: 'auto' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            {new Date().getFullYear()} © <b>Harsawangsa.</b>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="text-sm-end d-none d-sm-block">
              Develop by <b>Harsawangsa Team</b>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
