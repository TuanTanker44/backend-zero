--Flush cache
--Xoá bộ nhớ chiến lược thực thi câu lệnh
DBCC FREEPOCCACHE;
--------câu lệnh sql----------
--Kiểm tra chiến lược thực thi của các câu lệnh sau khi đã flush cache
SELECT UseCounts, TEXT, query_plan
FROM sys.dm_exec_cache_plans cp
CROSS APPLY sys.dm_exec_sql_text(plan_handle) sqltext
CROSS APPLY sys.dm_exec_query_plan(plan_handle) queryplan
WHERE text LIKE '%FROM <tên table>%'
AND text NOT LIKE '%SELECT UseCounts%'
