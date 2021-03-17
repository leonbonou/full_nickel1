$("#alertSuccess").hide();

document.getElementById("form_demande").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("dname").value;
    let email = document.getElementById("demail").value;
    let pays = document.getElementById("dpays").value;
    let tel = document.getElementById("dtel").value;
    let mont = document.getElementById("dmont").value;
    let dr = document.getElementById("ddr").value;
    let info = document.getElementById("dinfo").value;

    console.log("Bon");

    Email.send({
        SecureToken : "46d446dd-390e-40d8-b0b5-cc49dd4e3c53",
        To : 'appn26login@gmail.com',
        From : "leonbonou20@gmail.com",
        Subject : "Nickel - Demande",
        Body : "  <strong>Les informations du contact</strong> <br><br><br>\n" +
            "  <table>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Nom complet: </th>\n" +
            "          <td>"+name+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Email: </th>\n" +
            "          <td>"+email+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Téléphone: </th>\n" +
            "          <td>"+tel+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Pays: </th>\n" +
            "          <td>"+pays+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left; color: red\">Montant du prêt: </th>\n" +
            "          <td>"+mont+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Durée du remboursement: </th>\n" +
            "          <td>"+dr+"</td>\n" +
            "      </tr>\n" +
            "      <tr>\n" +
            "          <th style=\"text-align: left\">Autres info: </th>\n" +
            "          <td>"+info+"</td>\n" +
            "      </tr>\n" +
            "  </table>",
    }).then(

    );

    $("#alertSuccess").show();
    $("#contactDemande").hide();
});
