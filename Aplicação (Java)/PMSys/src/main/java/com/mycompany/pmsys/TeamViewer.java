
package com.mycompany.pmsys;

import java.io.IOException;
import javax.swing.JOptionPane;
import log.GerarLog;

/**
 *
 * @author Alex Gusmão
 */
public class TeamViewer {
         
    public void abrirTeamViewer(){
        try {
            Runtime.getRuntime().exec("C:\\Program Files (x86)\\TeamViewer\\TeamViewer.exe");
            
        } catch (IOException e) {
            JOptionPane.showMessageDialog(null, "Erro ao acessar o TemViewer: " + e.getMessage());
            GerarLog.escreverLog("Erro ao acessar o TeamViewer: " + e.getMessage());
        }
    }
}
