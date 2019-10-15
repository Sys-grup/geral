
package com.mycompany.pmsys;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import javax.swing.JOptionPane;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author Aluno
 */
public class DadosHD {
    
    private Double totalEspaco;
    private Double espacoTotalDispoivel;
    
    public DadosHD(String maquina){
        
         ConnectURL dadosConexao = new ConnectURL();
         JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
        
         List selectHD = jdbcTemplate.queryForList("SELECT * from tblInfoHD where fkMaquina = 1000");
        //System.out.println("Todos:\n"+ selectHD);
        
        System.out.println(selectHD);
        
    }
        /* Dados HD via JDBC Puro  */   
//         Connection conn = ConnectURL.conexao();
//        
//        try{
//            String selectHD = "SELECT * tblInfoHD where fkMaquina = 1000";
//            PreparedStatement stmt = conn.prepareStatement(selectHD);
//            ResultSet rs = stmt.executeQuery(selectHD);
//            
//            while (rs.next()){
//                
//                totalEspaco = rs.getDouble(2);
//                espacoTotalDispoivel = rs.getDouble(3);
//                
//                
//            }
//            
//    }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
//    }

    public Double getTotalEspaco() {
        return totalEspaco;
    }

    public Double getEspacoTotalDispoivel() {
        return espacoTotalDispoivel;
    }
    
    
}
