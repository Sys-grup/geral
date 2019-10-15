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
public class DadosCPU {
    
    private String nomeCpu;
    private Double byUser;
    private Double bySystem;
    private Double totalUso;
    
    public DadosCPU(String maqina){
        
        ConnectURL dadosConexao = new ConnectURL();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
        
        List selectCPU = jdbcTemplate.queryForList("SELECT * from tblInfoCPU where fkMaquina = 1000");
        System.out.println("Todos:\n"+ selectCPU);
        

    /* Dados CPU via JDBC Puro  */        
//        
//     Connection conn = ConnectURL.conexao();
//        
//        try{
//            String selectCPU = "SELECT * tblInfoCPU where fkMaquina = 1000";
//            PreparedStatement stmt = conn.prepareStatement(selectCPU);
//            ResultSet rs = stmt.executeQuery(selectCPU);
//            
//            while (rs.next()){
//                nomeCpu = rs.getString("nomeCPU");
//                byUser = rs.getDouble(3);
//                bySystem = rs.getDouble(4);
//                totalUso = rs.getDouble(5);
//                
//            }
//            
//    }catch(SQLException ex){
//            JOptionPane.showMessageDialog(null, "Erro do Sql \n" + ex, "Erro", JOptionPane.ERROR_MESSAGE);
//        }
        
        
        
        
        
    }

    public String getNomeCpu() {
        return nomeCpu;
    }

    public Double getByUser() {
        return byUser;
    }

    public Double getBySystem() {
        return bySystem;
    }

    public Double getTotalUso() {
        return totalUso;
    }
}