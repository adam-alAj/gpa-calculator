import React, { useEffect } from "react";
import styled from "styled-components";

export default function AdAfterCalc() {
    useEffect(() => {
    const ins = document.querySelector('ins[data-ad-slot="AFTER_SLOT_ID"]');
    if (window.adsbygoogle && ins && !ins.dataset.filled) {
      window.adsbygoogle.push({});
      ins.dataset.filled = "true";
    }
  }, []);

  return (
    <AdWrapper key="after-ad">
      <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="pub-7392710276037924"
          data-ad-slot="AFTER_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
    </AdWrapper>
  );
}

const AdWrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  text-align: center;
`;