
package com.mycompany.pmsys;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.swing.JOptionPane;

/**
 *
 * @author Aluno
 */
public class DadosHD {
    
    private Double totalEspaco;
    private Double espacoTotalDispoivel;
    
    public DadosHD(String maquina){
         Connection conn = ConnectURL.conexao();
        
        try{
            String selectHD = "SELECT * tblInfoHD where fkMaquina = 1000";
            PreparedStatement stmt = conn.prepareStatement(selectHD);
            ResultSet rs = stmt.executeQuery(selectHD);
            
            while (rs.next()){
                
                totalEspaco = rs.getDouble(2);
                espacoTotalDispoivel = rs.getDouble(3);
                
                
            }
            
    }catch(SQLException ex){
            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
        }
    }

    public Double getTotalEspaco() {
        return totalEspaco;
    }

    public Double getEspacoTotalDispoivel() {
        return espacoTotalDispoivel;
    }
    
    
}
