import React from 'react'

function MainPenawaranOrganism(props) {
  return (
    <div className="md:mb-20">
      <div>
        <h1 className="font-bold text-[22px] p-3 border-[1.5px] border-red-600 text-red-600">
          {props.jenisContainer}
        </h1>
        <div className="flex justify-between md:pt-10 md:pb-6 pt-5">
          <h4 className="text-primary font-bold md:text-xl text-[15px] ">
            Keterangan Jasa
          </h4>
          <h4 className="font-bold text-black md:pr-16 pr-8 md:text-xl text-[15px]">
            Harga
          </h4>
        </div>
      </div>

      <div className="border-b-2 pb-4 pt-8 md:pt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa1}{" "}
            <span className="text-secondary font-light">(Container 1 -3)</span>
          </h4>
          {props.biaya1 ? (
            <p className="font-bold text-slate-700 text-left md:text-lg text-[14px]">
              Rp {props.biaya1}{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
              <br />
              <span className="text-secondary font-light">
                (s/d container ke-3)
              </span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-left md:text-lg text-[14px]">
              Rp XXX.XXX{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
              <br />
              <span className="text-secondary font-light">
                (s/d container ke-3)
              </span>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center md:pt-4 pt-2">
          <h4 className="text-black font-bold md:w-[400px] w-[200px] text-left md:text-lg text-[14px]">
            {props.jasa2}
            <span className="text-secondary font-light"></span>
          </h4>
          {props.biaya2 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg text-[14px]">
              Rp {props.biaya2}{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg text-[14px]">
              Rp XXX.XXX{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
            </p>
          )}
        </div>
      </div>

      {/* 2 */}
      <div className="border-b-2 pb-4 pt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-black font-bold md:w-[400px] w-[200px] text-left md:text-lg text-[14px]">
            {props.jasa3}{" "}
            <span className="text-secondary font-light">
              (Container Pertama)
            </span>
          </h4>
          {props.biaya3 ? (
            <p className="font-bold text-slate-700 text-left md:text-lg text-[14px]">
              Rp {props.biaya3}{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
              <br />
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-left md:text-lg text-[14px]">
              Rp XXX.XXX{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
              <br />
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center md:pt-4 pt-2">
          <h4 className="text-black font-bold md:w-[400px] w-[200px] text-left md:text-lg text-[14px]">
            {props.jasa4}{" "}
            <span className="text-secondary font-light">
              (Untuk jalur merah)
            </span>
          </h4>
          {props.biaya4 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg text-[14px]">
              Rp {props.biaya4}{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg text-[14px]">
              Rp XXX.XXX{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
            </p>
          )}
        </div>
      </div>

      {/* 3 */}
      <div className="border-b-2 pb-4 pt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa5}{" "}
            <span className="text-secondary font-light">
              (Untuk jalur merah)
            </span>
          </h4>
          {props.biaya5 ? (
            <p className="font-bold text-slate-700 text-left md:text-lg text-[14px]">
              Rp {props.biaya5}{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
              <br />
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-left md:text-lg text-[14px]">
              Rp XXX.XXX{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
              <br />
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
      </div>

      {/* PIB */}
      <div className="border-b-2 pb-4 pt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa6} <span className="text-secondary font-light"></span>
          </h4>
          {props.biaya6 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp {props.biaya6} <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
      </div>

      {/* Biaya Uitslag */}
      <div className="border-b-2 pb-4 pt-4">
        <div className="flex justify-between items-center md:pt-4 pt-2">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa7} <span className="text-secondary font-light"></span>
          </h4>
          {props.biaya7 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp {props.biaya7} <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center md:pt-4 pt-2">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa8} <span className="text-secondary font-light"></span>
          </h4>
          {props.biaya8 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp {props.biaya8} <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
        <div className="flex justify-between items-center md:pt-4 pt-2">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa9} <span className="text-secondary font-light"></span>
          </h4>
          {props.biaya9 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp {props.biaya9} <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
      </div>

      {/* Biaya Angkutan */}
      <div className="border-b-2 pb-4 pt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
            {props.jasa10}{" "}
            <span className="text-secondary font-light">
              <br />
              (Sesuai daerah masing-masing)
            </span>
          </h4>
          {props.biaya10 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg text-[14px]">
              Rp {props.biaya10}{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg text-[14px]">
              Rp XXX.XXX{" "}
              <span className="md:inline-flex hidden">/Container</span>
              <span className="md:hidden inline-flex">/Cont</span>
            </p>
          )}
        </div>
      </div>

      {/* Biaya Operasional Dokumen */}
      <div className="pb-4 pt-4">
        <div className="flex justify-between items-center">
          <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left  md:text-lg text-[14px]">
            {props.jasa11}{" "}
            <span className="text-secondary font-light">
              <br />
              (Ambil dokumen, ambil DO, Masukan dokumen ke Bea cukai, dll)
            </span>
          </h4>
          {props.biaya11 ? (
            <p className="font-bold text-slate-700 text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp {props.biaya11} <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          ) : (
            <p className="font-bold text-[#C1C1C1] text-center md:text-lg md:w-[192px] w-[130px] text-[14px]">
              Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
              <span className="text-secondary font-light"></span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainPenawaranOrganism