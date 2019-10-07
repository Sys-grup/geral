/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys.oshi;

import com.mycompany.pmsys.ConnectURL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import javax.swing.JOptionPane;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.FileSystem;
import oshi.software.os.OSFileStore;
import oshi.software.os.OperatingSystem;

/**
 *
 * @author Ultim
 */
public class DadosHD {
    
    //Variaveis de HD
    private double espacoTotal = 0;
    private double espacoUsavel = 0;
    
    private SystemInfo si = new SystemInfo();
    OperatingSystem os = si.getOperatingSystem();
    FileSystem fs = os.getFileSystem();
    
    private void usoHD(){        
        OSFileStore[] teste = fs.getFileStores();
        
        for (OSFileStore teste1 : teste) {
            espacoTotal += teste1.getTotalSpace();
            espacoUsavel += teste1.getUsableSpace();
        }
        
        espacoTotal = (((espacoTotal/1024)/1024)/1024);
        espacoUsavel = (((espacoUsavel/1024)/1024)/1024);
        
    }
    
    public void insereDadosHD(){
        Connection conn = ConnectURL.conexao();
        
        try{
            String insertCPU = "INSERT INTO tblInfoHD values (?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(insertCPU);
            
            this.usoHD();
            
            stmt.setDouble(1, this.espacoTotal);
            stmt.setDouble(2, this.espacoUsavel);
            stmt.setInt(3, 1000);
            
            stmt.execute();
            
            System.out.println("Dados de HD inseridos com sucesso!");
        }catch(SQLException ex){
            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
        }
    }
    
}
