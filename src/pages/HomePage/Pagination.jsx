import "./Pagination.css";

export function Pagination() {
  return (
    <>
      <div className="pagination-container">
        <div className="pagination-first-row">
          <div className="pagination-count">1</div>
          <div className="pagination-count">2</div>
          <div className="pagination-count">3</div>
          <div className="pagination-count">4</div>
          <div className="pagination-count">5</div>
        </div>
        <div className="pagination-second-row">
          <div className="pagination-count">6</div>
          <div className="pagination-count">7</div>
          <div className="pagination-count">8</div>
          <div className="pagination-count">9</div>
        </div>
        <div className="pagination-third-row">
          <div className="pagination-count">10</div>
          <div className="pagination-count">11</div>
          <div className="pagination-count">12</div>
        </div>
        <div className="pagination-fourth-row">
          <div className="pagination-count">13</div>
          <div className="pagination-count">14</div>
          <div className="pagination-count">15</div>
        </div>
      </div>
    </>
  );
}
