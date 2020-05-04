import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Owner = styled.div`
  a {
    display: block;
    text-decoration: none;
    text-align: center;
    margin-bottom: 20px;
    color: #7159c1;
  }
  img {
    margin-top: 30px;
    max-width: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
  h1 {
    text-align: center;
    font-size: 32px;
    display:block;
    margin: 20px 0px;
  }
  p {
    text-align: center;
    margin: 0 auto;
    max-width: 400px;
    color: #666;
  }
`;
export const IssueList = styled.ul`
  margin-top: 30px;
  border-top: 1px solid #ddd;
  li {
    display: flex;
    align-items: center;
    padding: 15px 0px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    & + li {
      border-top: 1px solid #ddd;
    }
    .info {
      flex: 1;
      margin-left: 20px;
      padding-right: 20px;
      a {
        color: #666;
        text-decoration: none;
        &:hover {
          color: #7159c1;
        }
      }
      .labels {
        margin-top: 5px;
        span {
          display: inline;
          padding: 3px 5px;
          background-color: #666;
          border-radius: 5px;
          color: #ffffff;
          font-size: 12px;
          margin-left: 12px;
          &:first-child {
            margin-left: 0px;
          }
        }
      }
    }
  }
`;
