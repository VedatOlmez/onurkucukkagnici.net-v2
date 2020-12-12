import React from "react"
import SEO from "../components/SEO"
import styled from "styled-components"
import Button from "../components/Button/button"

const Form = styled.div`
  margin: calc(var(--spacing) * 2) 0;
  @media (min-width: 1200px) {
    margin: calc(var(--spacing) * 4) 0;
  }
`

const FormLabel = styled.label`
  font-family: var(--serif);
  font-size: var(--h5);
  margin-bottom: var(--spacing);
  display: inline-block;
`

const FormInput = styled.input`
  height: 50px;
  width: 100%;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const FormTextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  margin-bottom: calc(var(--spacing) * 1.5);
  font-size: var(--para);
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.25);
`

const ContactPage = () => {
  return (
    <>
      <SEO
        title="İLETİŞİM"
        description="Konya Ortodonti konusunda detaylı bilgi ve randevu almak için bize ulaşabilirsiniz."
      />
      <h1>İLETİŞİM</h1>
      <h5>
      Konya Ortodonti, Konya Ortodonti Tedavisi ve Konya Ortodonti Fiyatları hakkında detaylı bilgi ve randevu almak için bize ulaşabilirsiniz.{" "}
      </h5>
        <p>
          <b>Adres:</b>  <br></br>
          Yeni Meram Cad. No:33A <br></br>
          Meram, KONYA
        </p>
        <p>
          <b>Telefon:</b>  <br></br>
          <a href="tel://+903323200404">0(332) 320 04 04</a>
          <br></br>
          <a href="tel://+905442330177">0(544) 233 01 77</a>
        </p>
    </>
  )
}

export default ContactPage