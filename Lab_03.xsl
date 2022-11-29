<?xml version="1.0"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
   <body>
    <h1>Administrator</h1>
      <h1>Admin Information</h1>
      <table border="2">
         <tr bgcolor="#05facd">
            <th style="text-align:left">id</th>
            <th style="text-align:left">username</th>
            <th style="text-align:left">password</th>
            <th style="text-align:left">firstname</th>
            <th style="text-align:left">lastname</th>
            <th style="text-align:left">age</th>
            <th style="text-align:left">phone</th>
         </tr>
      <xsl:for-each select="administrator/admin_information/admin">
            <tr>
              <td><xsl:value-of select="id"/></td>
              <td><xsl:value-of select="username"/></td>
              <td><xsl:value-of select="password"/></td>
              <td><xsl:value-of select="firstname"/></td>
              <td><xsl:value-of select="lastname"/></td>
              <td><xsl:value-of select="age"/></td>
              <td><xsl:value-of select="phone"/></td>
              </tr>
      </xsl:for-each>
    </table>
    <h1>Candidate Information</h1>
      <table border="1">
         <tr bgcolor="#9acd32">
            <th style="text-align:left">CandidateID</th>
            <th style="text-align:left">C_password</th>
            <th style="text-align:left">name</th>
            <th style="text-align:left">age</th>
            <th style="text-align:left">symbol</th>
            <th style="text-align:left">possition</th>
            <th style="text-align:left">from</th>
            <th style="text-align:left">region</th>
            <th style="text-align:left">photo</th>
         </tr>
         <xsl:for-each select="administrator/candidate_information/candidate">
        <xsl:sort select="CandidateID"/>
            <tr>
              <td><xsl:value-of select="CandidateID"/></td>
              <td><xsl:value-of select="C_password"/></td>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="age"/></td>
              <td><xsl:value-of select="symbol"/></td>
              <td><xsl:value-of select="possition"/></td>
              <td><xsl:value-of select="from"/></td>
              <td><xsl:value-of select="region"/></td>
              <td><xsl:value-of select="photo"/></td>
              </tr>
      </xsl:for-each>
    </table>
    <h1>Votes Information</h1>
      <table border="1">
         <tr bgcolor="#9acd32">
            <th style="text-align:left">id</th>
            <th style="text-align:left">v_password</th>
            <th style="text-align:left">name</th>
            <th style="text-align:left">votersID</th>
            <th style="text-align:left">age</th>
            <th style="text-align:left">from</th>
            <th style="text-align:left">region</th>
            <th style="text-align:left">photo</th>
         </tr>
         <xsl:for-each select="administrator/voters_information/voter">
        <xsl:sort select="id"/>
        <xsl:if test="age >=18">
        <tr>
              <td><xsl:value-of select="id"/></td>
              <td><xsl:value-of select="v_password"/></td>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="votersID"/></td>
              <td><xsl:value-of select="age"/></td>
              <td><xsl:value-of select="from"/></td>
              <td><xsl:value-of select="region"/></td>
              <td><xsl:value-of select="photo"/></td>
              </tr>
        </xsl:if>
        </xsl:for-each>
</table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>