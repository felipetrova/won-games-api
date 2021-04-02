/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter() {

  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://github.com/felipetrova/won-games-api" target="_blank" rel="noopener noreferrer">
          Felipe Trova
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
