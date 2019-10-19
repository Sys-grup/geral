/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.pmsys;

import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;
/**
 *
 * @author Aluno
 */
public class DadosRAM {
    private Double totalRamUsado = 0.0;
    private Double totalRam = 0.0;
    
    public DadosRAM(Integer maquina){
         
        ConnectURL dadosConexao = new ConnectURL();
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dadosConexao.getDataSource());
        
        List<Map<String, Object>> selectRAM = jdbcTemplate.queryForList("select top 1 * from tblInfoRAM where fkMaquina = ? order by idInfoRAM desc", maquina);
        for (Map row : selectRAM){
            totalRamUsado = Double.parseDouble(row.get("totalRamUsado").toString());
            totalRam = Double.parseDouble(row.get("totalRam").toString());
        }
    }

    public Double getTotalRamUsado() {
        return totalRamUsado;
    }

    public Double getTotalRam() {
        return totalRam;
    }
    
}
