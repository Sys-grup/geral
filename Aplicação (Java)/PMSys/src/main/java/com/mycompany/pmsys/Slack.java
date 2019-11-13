/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 *
 * @author marce
 */
public class Slack {
    
    public Boolean enviarMensagem(String mensagem, String colaborador) {
        if (mensagem.isBlank() || colaborador.isBlank()) return false;
        try {
            URL url = new URL("https://hooks.slack.com/services/TMNE3H26A/"
                    + "BNSF52HCL/XaTtm8TD5p032D2AehtR1WAr");
            HttpURLConnection connection = 
                    (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type","application/json");
            
            connection.setDoOutput(true);
            DataOutputStream post = new DataOutputStream(connection.getOutputStream());
            post.writeBytes(String.format(
                    "{'text':'<@%s>: %s'}",
                    colaborador, mensagem
            ));
            post.flush();
            post.close();
            
            if (connection.getResponseCode()==200) {
                return true;
            }
        }
        catch (IOException ioe) {
            System.out.println(ioe.getMessage());
        }
        
        return false;
    }
}
