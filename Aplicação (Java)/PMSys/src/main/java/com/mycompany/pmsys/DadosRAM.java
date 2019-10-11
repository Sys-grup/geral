/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
public class DadosRAM {
    private Double totalRamUsado;
    private Double totalRam;
    
    public DadosRAM(String maquina){
         
         ConnectURL dadosConexao = new ConnectURL();
         JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
        
         List selectRAM = jdbcTemplate.queryForList("SELECT * tblInfoRAM where fkMaquina = 1000");
        //System.out.println("Todos:\n"+ selectHD);
    }
    /* Dados RAM via JDBC Puro  */ 
//         Connection conn = ConnectURL.conexao();
//        
//        try{
//            String selectRAM = "SELECT * tblInfoRAM where fkMaquina = 1000";
//            PreparedStatement stmt = conn.prepareStatement(selectRAM);
//            ResultSet rs = stmt.executeQuery(selectRAM);
//            
//            while (rs.next()){
//                
//                totalRamUsado = rs.getDouble(2);
//                totalRam = rs.getDouble(3);
//                
//                
//            }
//            
//    }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
//    }

    public Double getTotalRamUsado() {
        return totalRamUsado;
    }

    public Double getTotalRam() {
        return totalRam;
    }
    
}
